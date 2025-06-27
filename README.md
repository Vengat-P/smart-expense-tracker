# Smart Expense tracker Using React Js

## Overview

Create a smart expense tracking application using **React JS** that allows users to track their daily expenses by category, filter and analyze them over time, and visualize spending using charts.

## Tech Stack

- **React JS** for SPA
- **TailwindCss** for styling
- **VSCode** for development
- **Chart JS** for Chart visulazing
- **Local Storage** to stored Data
- **Daisy UI** for modal

## Logics

- **step 1 -** create new react application ,complete the file cleaning and install the required packages like tailwind css ,chart js,react router dom,daisy ui and flowbite .then create components footer, navbar file and pages home ,pagenotfound file.

- **step 2 -** create use context hook to handle some functions and hook state managemnet. create userprovider and pass children prop as a parameter and create usestate name is data this will be our main data which will be stored in localstorage.and create formdata state to collect user inputs as object and use Effect state within array data to re render every time data changing. in return create usercontext.provider with wraping children and passing all required states and function inside this to access anywhere in the application.now go to main jsx and warp app component inside of userProvider and also inside of browser router

- **step 3 -** In app component inside of return first make one div for navbar component and create a routes inside of this create to route with path and pages for page routing

- **step 4 -** create a add new entry button with logic of modal open. in that modal form inputs are there to collect inputs from users on sumbit function will store the all data into localstorage by using local storage.setItem and setData function if data array has objects then return data else return empty array.

- **step 5 -** now we can map the data and display in recent entries div with delete button . this delete button include onclick function name is handledelete with passing unique key as a parameter. inside of this function remove the object using splice method index will be the unique key. and store the data in localstorage. again setData if if data array has objects then return data else return empty array.

- **step 6 -** Now we need to show total amount and breakdown amount category wise.for this i create required usestates as per category wise with empty array. inside of use effect make settimeout function for every second.(reason for settimeout function is without this if we can give inside of useeffect but this will be throw maximum render exceed error continuosly becase we put chartdata iside of useeffect array) inside this function make filter method all catgory wise and store those datas in category wise usestates. now we has category wise arrays in home.jsx return part inside of add new entry butto div rendering the totatl amount from data array and category wise breakdown respectedcategory array by using reduce method.

- **step 7 -** Now we need to create Barchart file in component and import bar from react chart js pacakge and import registered tools from chart js. in return make ah bar from react chart js and passing data and options.this barchart function pass chart data prop this will be the children of barchart component.Then Create chartdata use state in usercontext with default label and datasets(these label array for showing category wise(x) and datasets array for values of that category) .In usercontext inside of settimeout function i already split the objects category wise and stored in category wise states now need to find the reduce total amont of each arrays .now setChart data label will be our category wise (enter the all category name as string)and dataset reduced total amount of category wise arrays here our category label index and dataset reduced amount index will be same then only matched perfectly .now in home we need to import barchart and pass the chartdata.

- **step 8 -** to sort data in rendering recent entries create status use state by clicking button recent will change highest use of conditional render but on click function will change the status false to display the render data array . status will true then end of maping of data will add reverse function or status will false before maping data will be sorted with amount value highest value. now if we click recent datas will change highest amount order and recent will change highest. now we need to click highest to get a recent entries.sorting and recent entries completed

- **step 9 -** Now need to filter entries by category or date or amount range. for this i create show active(false) ,value(string) and activedata(empty array) use states in usercontext . in home page create filter dropdown button in recent entries div with select input(options will be matches with category),date input and range input (min 0 to max 2000 with step breakdown each will be 500).inside of select input create onclick function name is handlechange similar to for date handledate and for range handlerange function. in user context create these 3 function and pass the prop. IN handleChange function set value will be selected value and setshowactive true and setactivedata will be related to category if value is all then setactivedata is data and value is food setactivedata is food state like these create all categories. now activedata array is ready with filter option so in home page where we use render the data mapping there make conditional render if showactive is true then map the active data array else map the data array. filter by category is done

- **step 10 -** now in handle date function filter the data with condition slected date and data.date is same then retrun true for filterarray. now setActivedata is filterarray and setshowactive true. filter by date also completed.In handlerange function crate a filterarray function with condition object.amount value is grater than range value then return true. and setactivedata is filteredarray and setshowactive is true . now the filter by range also completed

## How to Use

- **step-1 -** Click add new entry to add new entries.when you clicked form modal will open enter the all details

- **step-2 -** in recent entries part you can see your entries default you will see recent entries.you can see the toatal amount of spent and category wise spend also you can able to see.if you enter wrong entries you can delete by clicking delete button of that data.

- **step-3 -** You can see bar chart of your spending category wise.if you want to sort rencent entries highest amount order you can click recent arrow button .

- **step 4 -** If you want to filter entries by category click filter and select category option.or if you want to select date filter just select a Date you can able to see the selected date datas. or if you want to filter amount range wise select the range you can see the that range above datas.

## Features

- Responsive Design
- Clean and Minimalistic Layout

## Demo

- https://smartexpensetracker3.netlify.app/

## Authors

- [@ Vengat p](https://github.com/Vengat-P)
