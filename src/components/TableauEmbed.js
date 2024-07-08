import React, { useEffect } from 'react';

const TableauEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://connectors.tableau.com/libs/tableauwdc-2.4.latest.js";
    script.async = true;
    script.onload = () => {
      const myConnector = window.tableau.makeConnector();

      myConnector.getSchema = (schemaCallback) => {
        const cols = [
          { id: "Date", dataType: window.tableau.dataTypeEnum.string },
          { id: "Country", dataType: window.tableau.dataTypeEnum.string },
          { id: "State", dataType: window.tableau.dataTypeEnum.string },
          { id: "Confirmed", dataType: window.tableau.dataTypeEnum.int },
          { id: "Deaths", dataType: window.tableau.dataTypeEnum.int },
          { id: "Recovered", dataType: window.tableau.dataTypeEnum.int }
        ];

        const tableSchema = {
          id: "covidData",
          alias: "COVID Data",
          columns: cols
        };

        schemaCallback([tableSchema]);
      };

      myConnector.getData = (table, doneCallback) => {
        fetch("/api/get_covid_data")
          .then(response => response.json())
          .then(data => {
            const tableData = data.map(record => ({
              "Date": record.Date,
              "Country": record.Country,
              "State": record.State,
              "Confirmed": record.Confirmed,
              "Deaths": record.Deaths,
              "Recovered": record.Recovered
            }));

            table.appendRows(tableData);
            doneCallback();
          });
      };

      window.tableau.registerConnector(myConnector);
    };
    document.body.appendChild(script);
  }, []);

  const handleGetDataClick = () => {
    window.tableau.connectionName = "COVID Data";
    window.tableau.submit();
  };

  return (
    <div>
      <h1>Web Data Connector</h1>
      <button onClick={handleGetDataClick}>Get Data!</button>
    </div>
  );
};

export default TableauEmbed;
