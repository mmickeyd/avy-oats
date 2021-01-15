## Project Name ##
Avy Oats

## Description ##
> All-in-one app providing an overview for decision making for backcountry skiers of the Wasatch. Made for those early dawn patrol mornings, but can be useful anytime of the day. This eliminates the need to check several website for all the information needed before heading out for a tour. Future iterations will include extended forecasts, graphs, and much more!

## Sections to App ##
> Avalanche forecasts
> | Cloud cover forecasts
> | UDOT traffic cams
> | Animated radar covering the last hour
> | Detailed weather forecasts
> | Graphs showing data from weather stations

## Installing Dependencies and Usage ##

1. From within the root directory:
```
npm install
```

2. To build the webpack:
```
npm run build
```

3. To start the server:
```
npm run start
```

4. To create the database:
```
psql postgres < database/schema.sql
```