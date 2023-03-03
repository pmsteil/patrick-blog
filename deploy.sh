# ask user for a commit message for the deploy

echo "Enter a commit message for the deploy:"
read commitMessage
# run the build script
npm run build

# add all files to the repo
git add .

# commit the files
git commit -m "$commitMessage"

# push the files to the repo
git push origin master

