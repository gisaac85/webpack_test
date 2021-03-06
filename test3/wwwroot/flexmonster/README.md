
# What is JS Pivot Table by Flexmonster?

Flexmonster Pivot Table & Charts is a component for interactive pivot reports that can be [inserted to a web page or a web application](http://www.flexmonster.com/demos/pivot-table-js/?r=npm). It’s a powerful JavaScript tool to visualize your business data.

Flexmonster Pivot is a cross-platform web component that seamlessly work on any browser (Chrome, Firefox, Internet Explorer, Safari or Opera) across Windows, macOS, Linux, iOS or Android. 

Moreover, you have no limitation on the server-side technology, no matter whether your website runs on .NET, Java, PHP, Ruby, etc.

# Installation and usage
Start by installing Flexmonster as a node module and save it as a dependency in your package.json:
```
npm i flexmonster --save
```

Then, include the `flexmonster.js` file (for example, in the .html):
```
<script type="text/javascript" src="node_modules/flexmonster/flexmonster.js"></script>
```
To use Flexmonster you need a license key. If you don’t have a license key, get a free 30-days trial key at [www.flexmonster.com](https://www.flexmonster.com/download-page/?r=npm).

Now, you can create an instance of Pivot Table. Please note, `licenseKey` is your license or trial key, so you should replace `XXXX-XXXX-XXXX-XXXX-XXXX` with an actual key:
```
<div id="pivotContainer">The component will appear here</div>
<script>
	var pivot = new Flexmonster({
		container: "pivotContainer",
		componentFolder: "node_modules/flexmonster/",
		toolbar: true,
		licenseKey: "XXXX-XXXX-XXXX-XXXX-XXXX"
	});
</script>
```
Refer to the [Quick Start](https://www.flexmonster.com/doc/how-to-create-js-pivottable/?r=npm) guide for more details.

# Why use Flexmonster Pivot Table component?

## Easy to integrate

Pivot Table Component can be natively used with JavaScript or [TypeScript](http://www.flexmonster.com/doc/integration-with-typescript/?r=npm) and perfectly integrates with client side frameworks such as  [AngularJS](http://www.flexmonster.com/doc/integration-with-angularjs/?r=npm), [Angular](http://www.flexmonster.com/doc/integration-with-angular/?r=npm), [React](http://www.flexmonster.com/doc/integration-with-react/?r=npm), [Webpack](http://www.flexmonster.com/doc/integration-with-webpack/?r=npm) as good as with the server side like ASP.NET, Java JSP and others.

## Supports the most common data sources

- [Microsoft Analysis Services OLAP cubes](http://www.flexmonster.com/doc/connecting-to-microsoft-analysis-services/?r=npm)
- [Mondrian](http://www.flexmonster.com/doc/connecting-to-pentaho-mondrian/?r=npm)
- [JSON](http://www.flexmonster.com/doc/json-data-source/?r=npm)
- [SQL](http://www.flexmonster.com/doc/connecting-to-relational-database/?r=npm) (MS SQL, MySQL and others) databases 
- static [CSV](http://www.flexmonster.com/doc/csv-data-source/?r=npm) files

## High speed in visualizing your data 

This solution allows you to work extremely fast with really [large data volumes](http://www.flexmonster.com/demos/?r=npm) (huge OLAP cubes, data sets from SQL DBs or files up to 100 MB).

Maximum data size is limited only by your end-users’ browsers and the capacity of their devices. The table renders multiple millions of cells immediately. If the user’s browser can handle it, we’ll display it.

Moreover, we have developed a special application. It compresses CSV data and makes it load 5-10 times faster. [Flexmonster data compressor](http://www.flexmonster.com/blog/connecting-to-sql-databases-fast-data-loading-with-compressor-for-net-java-php/?r=npm) is freely available in different technologies, as follows: .NET, Java, PHP.

Working with OLAP cubes, a browser component can communicate with the server via XMLA protocol or you can use [Flexmonster Data Speed Accelerator for OLAP cubes](http://www.flexmonster.com/blog/flexmonster-data-speed-accelerator-for-olap-cubes-we-show-multidimensional-data-10-times-faster/?r=npm). It’s a special server-side proxy that helps you to increase data loading speed from server to customer’s browser tenfold.

## Smart features to analyze and manage your data

Pivot Component provides Excel-like features which give users the interface they have always been used to. The users can easily and quickly analyze data and produce a report using different options such as:
- Filtering
- Sorting
- Grouping fields in rows and columns
- Drill-down
- Drill-through
- Calculated fields
- Number formatting
- Aggregations
- Conditional formatting

You can find [all list of the set of tools](http://www.flexmonster.com/set-of-tools/?r=npm).

# Customizable & flexible
## Extensive API
  
Component has convenient full-functional JavaScript API to embed the component into web applications. Being a developer, you can:
- Define what features you want to enable/disable
- Build your own scenarios around the component.

[API Reference](http://www.flexmonster.com/api/?r=npm)

## Localizing component
  
Pivot Table & Charts component can be easily localized:
First of all, if you use one of the offered languages below, you can download the already prepared JSON files :
- [English](https://github.com/flexmonster/pivot-localizations/blob/master/en.json)
- [Español](https://github.com/flexmonster/pivot-localizations/blob/master/es.json)
- [Français](https://github.com/flexmonster/pivot-localizations/blob/master/fr.json)
- [Português](https://github.com/flexmonster/pivot-localizations/blob/master/pr.json)
- [Chinese](https://github.com/flexmonster/pivot-localizations/blob/master/ch.json)
- [Українська](https://github.com/flexmonster/pivot-localizations/blob/master/ua.json)

[Set localization for Pivot Table](http://www.flexmonster.com/doc/localizing-component/?r=npm)

## Compose report layout
Select which dimensions & values to show.
Users can easily change a report’s layout visually and examine the data from a different perspective. The power of Pivot report composing allows you to stop guessing all possible report scenarios your end-users might require. The user will be able to tune it to their own needs on the fly.

## Save & load reports
Users can create their own reports and save them to their local drive or the server and load previously saved reports with exactly the same layout, number formatting, filters, sorting and all the other settings.

This allows users to work with a predefined set of reports or create & save their own reports. Once the user has composed a report to reveal the precise data views that they need, they may want to save it for the future or share it with others.


## Export & print

All table views (Pivot / Flat / Classic) and charts view can be printed or exported.
Users can export the reports into a variety of formats:
• Microsoft Excel 7
• PDF
• Web page (HTML page)
• CSV (comma separated text format)
• Image (PNG)   

You can control where to save the export data, the following methods are supported:
• Save to local file
• Save to server (to remote file-storage or database)

# Resources
- [Demos](http://www.flexmonster.com/demos/?r=npm)
- [Documentation](http://www.flexmonster.com/doc/?r=npm)
- [Set of tools](http://www.flexmonster.com/set-of-tools/?r=npm)
- [Blog](http://www.flexmonster.com/blog/?r=npm)

Also you can get all support from development team on [Forum](http://www.flexmonster.com/forum/?r=npm). Flexmonster developers react fast to the questions and suggestion and provide professional assistance.


# How to get Pivot Table Component?
[Download free trial](http://www.flexmonster.com/download-page/?r=npm) 


