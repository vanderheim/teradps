# TeraDPS

A web application that allows styled visualizations and archiving of DPS Meter data for Tera Online.

# Tech Stack

This application is built with the following technology:

Meteor (v1.2 Only, Please use the correct version of Meteor to avoid build errors)

MongoDB

Express

Node

AngularJS

# Setup

1. You'll need to install Meteor to run this app. Install it with `curl https://install.meteor.com | /bin/sh`
2. Clone this repo.
3. Navigate to the repo folder and type meteor in your terminal to start the app. After it's finished, you can access it at http://localhost:3000
4. A sample encounter record is added for demonstration purposes on first startup.

# Features

- Stores DPS meter data submitted by ShinraMeter/CasualMeter into MongoDB.

- Provides a styled UI for viewing DPS meter data via the Encounter Display pages.

- Allows searching of encounter database with a range of filters, such as class, server, boss, slaying, heal comp, etc.

# For DPS Meter Developers

TeraDPS has an API server included which accepts data from DPS Meters. You can view the documentation on the API at https://github.com/kiritsuzu/teraDPS-API

Currently, TeraDPS has support for only ShinraMeter and CasualMeter.

ShinraMeter GitHub Repo: https://github.com/neowutran/ShinraMeter

CasualMeter GitHub Repo: https://github.com/lunyx/CasualMeter
