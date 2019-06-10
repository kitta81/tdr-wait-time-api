# tdr-wait-time-api

## Themeparksで取得できるJSONの追加方法

* `rideObject`にプロパティを追加
node_modules\themeparks\dist\disneytokyo\index.js

```javascript
rideObject.FastPass = rides[ride.id].fastpass;
+ rideObject.FacilityCode = rides[ride.id].facilityCode;
```

* `jsonData`にプロパティを追加
node_modules\themeparks\dist\ride.js

```javascript
var jsonData = {
  id: this[s_rideID],
  name: this.Name,
  active: this.Active,
  waitTime: this.WaitTime,
  fastPass: this.FastPass,
  lastUpdate: this.LastUpdate,
  status: this.Status,
+  facilityCode: this.FacilityCode
};
```