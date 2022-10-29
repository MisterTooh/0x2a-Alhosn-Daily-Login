from Alhosn import * # Importing Alhosn class

A = Alhosn() # To make it easier for ourselves, define Alhosn and use it anywhere.

A.phone = "+971585030519" # Defining a phone number, you can do it here or from Alhosn class directly.
A.eid   = "197240465" # Defining an eid number, you can do it here or from Alhosn class directly.
# +971565985085 raouf "72368030" uid

phone, eid = A.phone, A.eid
print("---------------SENDSMS------------------")
A.sendsms()

code = input("enter otp: ")
#code = 285394
print("---------------LOGIN------------------")
A.login(otp=code)  # The login method will take the otp code and the rest of info given
                    # Previously and will generate a Token, for future use.

print("---------------RESULT------------------")
A.result()    # The main method, used to recieve the results of the user
                         # which in return can be saved as a variable to parse it
                         # you can also save the photo of the person and specify
                         # the name, also the ability to view it in console.
results = A.results # Saving the results in a variable
A.export_json()
A.pdfout(pdftype="test",
   name="test-pdf")     # Save either the user test or vaccination form
                        # You can also specify the name or leave it, and
                        # it will be called as the type
