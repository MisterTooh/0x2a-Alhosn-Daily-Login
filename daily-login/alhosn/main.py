# Importing Alhosn class
from email.quoprimime import body_check
from os import O_DSYNC
import requests
import json
from fake_useragent import UserAgent
import cv2

params = {
            "cardId": "e9d89e13feff12e000018ee4"
}
r = requests.get("http://localhost:3000/student/search",json=params)
# return response containing uid
print(r.text)
full=r.json()["student"]["fullName"]
UIDnum=r.json()["student"]["UID"]
cardId=r.json()["student"]["cardId"]
login=r.json()["student"]["loginName"]
status=r.json()["student"]["status"]
close=r.json()["student"]["closeReason"]
print(UIDnum)
#scan QR Code
vid = cv2.VideoCapture(0)
detector = cv2.QRCodeDetector()
while(1):
    ret, frame = vid.read()
    data, bbox, straight_qrcode = detector.detectAndDecode(frame)
    if len(data) > 0:
        break
vid.release()
cv2.destroyAllWindows()
cont = data.replace("go", "m", 1)
print("---------------RESULT------------------")
print(cont)
params = {
            'suffix': UIDnum,
            'qrcode':cont
}
headers={
            'accept': 'application/json, text/plain, */*',
            'accept-encoding': 'gzip, deflate, br',
            'accept-language': 'en',
            'client-type': 'web',
            'content-type': 'application/json;charset=UTF-8',
            'origin': 'https://m.alhosnapp.ae',
            'referer': 'https://m.alhosnapp.ae/',
            'sec-fetch-dest': 'empty',
            'sec-fetch-mode': 'cors',
            'sec-fetch-site': 'same-origin',
            'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
            'version': '3.3.9'
}
print("TRYING TO ACCESS QRCODE LINK")
r = requests.post("https://m.alhosnapp.ae/greencode/public/qrcodeverify",headers={'User-Agent': UserAgent().random},json=params)

print(r.text)
results = r.json()['response']

print(results["passResultList"][0]["code"])
print(results["info"]["en"])
if results["passResultList"][0]["code"] ==  "Green":
    data = {
        "cardId":str(cardId),
        "fullName": str(full),
        "loginName": str(login),
        "UID": int(UIDnum),
        "alhosnStatus": True,
        "status": True,
        "closeReason":"N/A",
}

r = requests.post("http://localhost:3000/student/add",json=data)
print(r.text)
