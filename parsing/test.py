

print("creating file");
x = open("/data/tmp", "w+");
x.write("Now the file has more content!")
x.close()
print("done");
