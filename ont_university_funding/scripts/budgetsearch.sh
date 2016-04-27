#!/bin/bash

# download 2014-2015 Ontario budget
# 6 seperate text files are created, for the following reasons:
# - find all lines containing string(datagrep.txt)
# - convert to utf-8(dataUTF.txt)
# - remove accents(sanitize)(dataClean.txt)
# - extract numbers(dataNumbers.txt)
# - extract ministries(dataTitles.txt)
# - extract funding reasoning(dataReasons.txt)
# - add all numbers - output after completion(total provincial funding)

leave=0

while [ "$leave" -eq 0 ]
do
	echo "Do you want to download the Ontario budget for 2014-2015? <y/n>"
	read budget

	if [ "$budget" = "y" ]
	then
		wget https://www.ontario.ca/sites/default/files/opendata/pa_volume_3_0.csv
	fi

	echo "Enter the string you want to search from the budget"
	read search
	grep -i "$search" pa_volume_3_0.csv > datagrep.txt && iconv -f iso88591 -t utf8 datagrep.txt > dataUTF.txt && sed -e 's/È/E/' -e 's/É/E/' -e 's/É/E/' -e 's/È/E/' dataUTF.txt > dataClean.txt && sed -e 's/[^0-9.]*//g' -e '/^\s*$/d' < dataClean.txt > dataNumbers.txt && sed -e 's/,.*//' -e 's/"//' dataClean.txt > dataTitles.txt && cut -d ',' -f 3-6 dataClean.txt > dataReasons.txt 
	
	echo "The total provincial funding for $search :"
	awk '{ sum += $1 } END { print sum }' dataNumbers.txt

	echo "exit? <y/n>"
	read fin

	if [ "$fin" = "y" ]; then
		leave=1
	fi
done
