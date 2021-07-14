#!/bin/bash
tag="author: 经济学人en"
wordstoremove="...";
FILES=./archived/*
for f in $FILES
do

  # take action on each file. $f store current file name
  if grep -Fxq "${tag}" "$f"
    then
      # code if found
        echo "Processing $f file...";
        git rm "$f" -f;
  fi

  # if [[ $f == *"新闻联播"* ]]; then
  #   f2="${f//${wordstoremove}/}";
  #   mv "${f}" "${f2}";
  #   echo "Processing ${f2} ";
  # fi
done
