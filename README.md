# Potion Parser

[![Website Status](https://img.shields.io/uptimerobot/status/m789298462-05f2d703b4fb8003469589dc?style=flat)](https://uptimerobot.com/dashboard.php#789298462)

A website to calculate potion ingredients needed to make potions in the video game [Terraria](https://www.terraria.org/). This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7. This project can be viewed live [here](http://potion-parser.s3-website-us-east-1.amazonaws.com/).

## Development

Run `npm install` once to install dependencies, then run `ng serve` to create a dev server. Navigate to `http://localhost:4200/` to view. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` with the `--configuration production` flag to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploy

Make sure to build the project first before deploying. Run `aws s3 rm s3://potion-parser/ --recursive --include "*"` first to wipe the S3 bucket, then run `aws s3 sync ./dist s3://potion-parser --acl public-read` to upload the files to the S3 bucket.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Contributors and Maintainers
* **Daniel Kilgallon** - Creator and Maintainer