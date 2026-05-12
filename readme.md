npm init -y --> for server package
npm i typescript --> typescript install 
npx tsc --init --> for tsconfig.md 
 then OPEN---> rootDir, outDir,  "types": ["node"], "module": "esnext", 
 then --> // "jsx": "react-jsx", you do 
 then --> go to package.json --> remove module
npm install -D @types/node 
npm i tsx ----> for server running 





/////

res.writeHead(200, {
  "content-type": "application/json"
});

res.end(JSON.stringify({
  message: "this is root route"
}));

মানে:

✅ Server success response পাঠাচ্ছে
✅ JSON data return করছে
✅ 200 = success
✅ application/json = JSON format data
✅ JSON.stringify() = object কে JSON বানায়
✅ res.end() = response শেষ করে



res.writeHead(404, {
  "content-type": "application/json"
});

res.end(JSON.stringify({
  message: "route not found"
}));


মানে:

❌ Route পাওয়া যায়নি
❌ 404 = not found error

Simple Flow
Request আসে
   ↓
Route check হয়
   ↓
Match করলে → 200 response
না করলে → 404 response