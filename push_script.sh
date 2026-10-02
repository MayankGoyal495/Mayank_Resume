#!/bin/bash

# Get a list of files to commit, excluding node_modules, .next, and .git
find . -type f -not -path "*/node_modules/*" -not -path "*/.git/*" -not -path "*/.next/*" > files_to_commit.txt

count=1
while read file; do
    echo "Processing $file"
    git add "$file"
    git commit -m "feat: add ${file#./} ($count)"
    git push -u origin main
    count=$((count+1))
done < files_to_commit.txt

rm files_to_commit.txt
rm push_script.sh
