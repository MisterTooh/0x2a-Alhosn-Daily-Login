# Importing Alhosn class
import requests
import json
from fake_useragent import UserAgent
import cv2
# A = Alhosn() # To make it easier for ourselves, define Alhosn and use it anywhere.

# A.phone = "+971585030519" # Defining a phone number, you can do it here or from Alhosn class directly.
# A.eid   = "197240465" # Defining an eid number, you can do it here or from Alhosn class directly.
# # +971565985085 raouf "72368030" uid

# phone, eid = A.phone, A.eid
# print("---------------SENDSMS------------------")
# A.sendsms()

# code = input("enter otp: ")
# #code = 285394
# print("---------------LOGIN------------------")
# A.login(otp=code)  # The login method will take the otp code and the rest of info given
#                     # Previously and will generate a Token, for future use.
#first scan a users id badge 
badge = input("Scan ID Badge : ")
# then make a get request to server database
params = {
            'suffix': "1216",
            'qrcode':""
}
r = requests.get("localhost:3000",json=params)
# return response containing uid

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
            'suffix': "1216",
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
data = {
            "status": results["passResultList"][0]["code"],
            "desc": results["info"]["en"]
}
      #   data = {
      #       "name": self.results["name"]["en"],
      #       "status": self.results["code"],
      #       "desc": self.results["info"]["en"],
      #       "uid": str(self.uid)
      #   }
      #   with open('data.json', 'w', encoding='utf-8') as f:
      #       json.dump(data,f,ensure_ascii=False)
   # A.result(qr=cont)    # The main method, used to recieve the results of the user
                           # which in return can be saved as a variable to parse it
                           # you can also save the photo of the person and specify
                           # the name, also the ability to view it in console.
#    results = A.results # Saving the results in a variable
# A.export_json()
# A.pdfout(pdftype="test",
#    name="test-pdf")     # Save either the user test or vaccination form
                        # You can also specify the name or leave it, and
                        # it will be called as the type
