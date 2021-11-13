import sys
import json
filename = sys.argv[1]
str1 = sys.argv[2]
str2 = sys.argv[3]
str3 = sys.argv[4]
str4 = sys.argv[5]

strings = [str1, str2, str3, str4]
priorities = {}
count = 0

with open(f'{filename}.json', 'w', encoding='utf-8') as file:
    for i in range(4):
        for j in range(4):
            for k in range(4):
                for l in range(4):
                    for m in range(4):
                        # Remove the ones that have something else than wall behind the wall (impossible)
                        if (strings[i] == "w" and (strings[j] != "w" or strings[k] != "w" or strings[l] != "w" or strings[m] != "w")):
                            print(f'{strings[i]}{strings[j]}{strings[k]}{strings[l]}{strings[m]}')
                            continue
                        elif (strings[j] == "w" and (strings[k] != "w" or strings[l] != "w" or strings[m] != "w")):
                            print(f'{strings[i]}{strings[j]}{strings[k]}{strings[l]}{strings[m]}')
                            continue
                        elif (strings[k] == "w" and (strings[l] != "w" or strings[m] != "w")):
                            print(f'{strings[i]}{strings[j]}{strings[k]}{strings[l]}{strings[m]}')
                            continue
                        elif (strings[l] == "w" and strings[m] != "w"):
                            print(f'{strings[i]}{strings[j]}{strings[k]}{strings[l]}{strings[m]}')
                            continue
                        else:
                            priorities[f'{strings[i]}{strings[j]}{strings[k]}{strings[l]}{strings[m]}'] = 0
                            count += 1

    print("Luotuja rivejä: " + str(count))
    json.dump(priorities, file, ensure_ascii=False, indent=4)

