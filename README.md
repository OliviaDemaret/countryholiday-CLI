# countryholiday-CLI

The tool will verify that the parameter is a well-formatted country name, transform it onto a two-letters country code, then perform an HTTP request to the API of the ![nager.date](https://date.nager.at/) service.

It will show the results (a list of holidays dates for the current year) in a readable way in the terminal.

## how it works

Enter a country in the terminal like a parameter, then it will check if the given country exists. If the given country exists, it will use an API to display the lists of the holiday dates of the given country.

For example:

`@oliviademaret/holicountry Belgium`

It will show:

`

> 2022-04-18 - Easter Monday - Easter Monday
> 2022-04-25 - Anzac Day - Anzac Day
> 2022-05-02 - May Day - May Day
> `

## how to install it

Write the following line in your terminal:

`npm install @oliviademaret/holicountry`
