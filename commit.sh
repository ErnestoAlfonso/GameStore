AZUREPAT=$AZUREPAT
AZUSERNAME=$AZUSERNAME
AZUSER_EMAIL=$AZUSER_EMAIL
AZORG=$AZORG
git clone https://github.com/ErnestoAlfonso/GameStore
cd GameStore
rm -rf .git

cd ..

GIT_CMD_REPOSITORY="https://dev.azure.com/$AZURENAME/Space%20Game%20-%20Web/_git/GameStorenew"
git clone $GIT_CMD_REPOSITORY

cp -r Space%20Game%20-%20Web/* GameStorenew/

cd GameStorenew

git config --global user.email "$AZUSER_EMAIL"
git config --global user.name "$AZUSERNAME"

git add .
git commit -m "sync from git to azure"

git push