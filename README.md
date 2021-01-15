## Project Name ##
Avy Oats

## Description ##

> All-in-one app providing an overview for decision making for backcountry skiers of the Wasatch. Made for those early dawn patrol mornings, but can be useful anytime of the day. This eliminates the need to check several website for all the information needed before heading out for a tour. Future iterations will include extended forecasts, graphs, and much more!

> A portion of this app uses information pulled from the UAC (Utah Avalanche Center) and it would not be nearly as useful without their free contributions. If you enjoy using this app, please check out their website and consider donating to the cause. [UAC Donation Page](https://utahavalanchecenter.org/)

## Sections to App ## (not all complete yet)
> Avalanche forecasts
> Cloud cover forecasts
> UDOT traffic cams
> Animated radar covering the last hour
> Detailed weather forecasts
> Graphs showing data from weather stations

## Creating environment variables and database ##

1. Create .env file, following .env_sample template

2. To create the database locally:
```
psql postgres < database/schema.sql
```

###### OR ######

2. To create the database on Ubuntu:
```
sudo apt update
sudo apt install postgres postgresql-client
sudo -u postgres psql < database/schema.sql
```

3. Insert a fake forecast into database:
```
sudo -u postgres psql
\c avyoats
insert into forecasts (forecast) values ('not a real forecast');
```

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
npm start
```
