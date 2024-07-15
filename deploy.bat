cd dist
echo demo19-6-2024.cocode.pro > CNAME
git init
git add -A
git commit -m "deploy"
git push -f https://github.com/nguyenvancongdev/web-vue.git master:gh-pages
pause
echo .