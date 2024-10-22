def main():                             # nothing in main only call other functions
    studentinfo = {}
    showstudent(firstcheck(studentinfo))

def firstcheck(studentinfo):

    while True:
        first = input("Do you want to add ,find or end ? ").lower()
        if first.lower() =="add":
            addstudent(studentinfo)
        elif first =="find":
            findstudent(studentinfo)
        elif first =="end":
            break
        else:
            print("Please type add , find or end")
    return studentinfo

def addstudent(studentinfo):
    id,name,lastname = readintput()
    if (checkdup(id,studentinfo)) == False:
        print("This id already exists in the data")
        return 
    else:
        savestudent(id,name,lastname,studentinfo)
        showstudent(studentinfo)


def readintput():

    while True:

        id = input("ID:")
        if ("67130500"in id) and id.isdigit():
            break
        
        else:
            print("Id must contain 67130500xxx and must be all digit")
            continue

    name = input("Name:")
    lastname = input("Lastname:")
    
    return id,name,lastname


def savestudent(id,name,lastname,studentinfo):
    studentinfo[id] = (name,lastname)
    return studentinfo

def showstudent(studentinfo):
    print("Current infomation is",studentinfo)

def checkdup(id,studentinfo):
    if id in studentinfo:
        return False
    return True

def findstudent(studentinfo):
    
    if len(studentinfo) == 0:
        print("There is no information yet")
        return
    id = input("Enter the student ID to search: ")
    if id in studentinfo:
        print(f"Student found: ID = {id}, {studentinfo[id][0]}, {studentinfo[id][1]}")
    else:
        print("Student not found.")

main()