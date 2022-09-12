A=0 && for i in ./src/repos/*/*/*/summary.json; do cp ${i} ./src/menu-data/summary_${A}.json && let  A++ ; done
echo "["                                  
                                             
FILES=(./src/menu-data/*)                               
LEN=${#FILES[@]}                             
INDEX=0                                      
                                             
for i in ${FILES[@]}; do                     
                                             
      cat $i                                 
      [ $INDEX -ne $((LEN-1)) ] && echo ","  
      let INDEX++;                           
done                                         
                                             
echo "]"

mv ./src/repos/player/player-documentation-feat-slug/_data/menu.json ./src/menu-data/player.json
cp -R ./src/repos/player/player-documentation-feat-slug/images/ ./static/images
cp -R ./src/repos/creator/documentation-creators-main/images/ ./static/
