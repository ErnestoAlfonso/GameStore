AZUREPAT=$AZUREPAT
AZUSERNAME=$AZUSERNAME
AZUSER_EMAIL=$AZUSER_EMAIL
AZORG=$AZORG
git clone https://github.com/ErnestoAlfonso/GameStore
cd GameStore
rm -rf .git

cd ..

GIT_CMD_REPOSITORY="https://$AZUSERNAME:$AZUREPAT@dev.azure.com/$AZORG/Prueba1/_git/Prueba1"
git clone $GIT_CMD_REPOSITORY

cp -r Prueba1/* GameStorenew/

cd GameStorenew

git config --global user.email "$AZUSER_EMAIL"
git config --global user.name "$AZUSERNAME"

git add .
git commit -m "sync from git to azure"

git push