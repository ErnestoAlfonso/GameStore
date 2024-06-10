AZUREPAT=$AZUREPAT
AZUSERNAME=$AZUSERNAME
AZUSER_EMAIL=$AZUSER_EMAIL
AZORG=$AZORG
git clone https://github.com/ErnestoAlfonso/GameStore
cd GameStore
rm -rf .git

cd ..

GIT_CMD_REPOSITORY="https://ernealfons00@gmail.com:$AZUREPAT@dev.azure.com/$AZORG/Prueba1/_git/Prueba1"
git clone $GIT_CMD_REPOSITORY

cp -r Prueba1/Repos/Files/Prueba1/

cd Prueba1

git config --global user.email "ernealfonso00@gmail.com"
git config --global user.name "ernealfonso00@gmail.com"

git add .
git commit -m "sync from git to azure"

git push