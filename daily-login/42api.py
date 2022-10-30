import requests
import sys
from http import HTTPStatus
from time import sleep
import pandas

# CONFIGURATION MACROS *** ENTER CREDRNTIALS HERE ****
BASE_URL = "https://api.intra.42.fr"
UID = "u-s4t2af-29d487991698c28687dd2f08dd5c99cc85f444e546de095d21f03ceac8120223"
SECRET = "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"
N_LIST_EXAMS = 5
N_DAYS_LOCATIONS = 7
N_PAST_LOCATIONS = 3
HALF_LAB = False


def get_token():
	if not UID and not SECRET:
		sys.exit(" PLEASE ENTER UID AND SECRET IN TOP OF 42seatplanner.csv TO USE!!!")
	response = requests.post(
		url=f'{BASE_URL}/oauth/token',
		data={'grant_type': 'client_credentials'},
		auth=(UID, SECRET)
	)
	return response.json()["access_token"]


def get(token, url):
	results = []
	url = f"{BASE_URL}{url}"
	while url:
		resp = requests.get(url, headers={"Authorization": f"Bearer {token}"})
		if resp.ok:
			data = resp.json()
			if not data:
				break
			if isinstance(data, dict):
				data = [data]
			results += data
		elif resp.status_code == HTTPStatus.TOO_MANY_REQUESTS:
			sleep(int(resp.headers["Retry-After"]))
			continue
		else:
			print(f"[Request Error] {url} [Status Code] {resp.status_code}")
		url = (
			requests.utils.unquote(resp.links["next"]["url"])
			if "next" in resp.links
			else None
		)
	return results
def extract_user_id(x):
	return x["user"]["id"]
def drop(x):
	if not isinstance(x["usual_full_name"],float):
		return x

if __name__ == "__main__":
	# print("GETTING API TOKEN ... \n")
	# token = get_token()
	# print("GETTING EXAMS INFORMATION ... \n")
	# df = pandas.json_normalize(get(token, "/v2/closes?filter[campus_id]=43"))
	# option2 = ['close']
	# df2 = df.loc[df['state'].isin(option2)]
	# print(df2.columns)
	# df2 = df2[["user.login","reason"]]
	# df2 = df2.rename(columns={"user.login" : "login"})
	# df2 = df2.reset_index(drop=True)
	# df2 = df2.drop_duplicates(subset=['login'], keep='first')
	# df2.to_csv("test.csv",index=False)
	# print(df2)
	# df3 = pandas.DataFrame(get(token, "/v2/cursus_users?filter[campus_id]=43&filter[cursus_id]=21"))
	# df3["user_id"] = df3.apply(extract_user_id,axis=1)
	# print(df3)
	# user_list = df3["user_id"].tolist()
	# df_users = pandas.DataFrame()
	# for i,id in enumerate(user_list):
	# 	accounts = get(token, f"/v2/users/{id}")
	# 	print(i)
	# 	if(accounts):
	# 		data = pandas.DataFrame(accounts)
	# 		df_users = pandas.concat(
	# 			[df_users, data], ignore_index=True)
	# df_users = df_users.reset_index(drop=True)
	# print(df_users)
	# df_users=df_users[["login","usual_full_name","image_url","kind","active?"]]
	# #filter on kind=student
	# option3 = ['student']
	# df_users=df_users.loc[df_users['kind'].isin(option3)]
	# df_users.to_csv("test2.csv",index=False)
	df_users = pandas.read_csv("test2.csv")
	df2 = pandas.read_csv("test.csv")
	# print(df_users)
	# print(df2)
	df4 = pandas.merge(df_users,df2, how="left",on="login")
	df4 = df4.reset_index(drop=True)
	df4 = df4.rename(columns={"login" : "loginName", "usual_full_name" : "fullName","image_url" : "imageUrl", "active?" : "status" , "reason" : "closeReason"})
	df4=df4[["loginName","fullName","imageUrl","status","closeReason"]]
	print(df4)
	out = df4.to_json(orient='records')
	requests.get("localhost:3000/student/addArray",body=out)
	print(out)
