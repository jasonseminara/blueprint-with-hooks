import React, { useState } from 'react';
import { MenuItem } from "@blueprintjs/core";
import { Suggest, ItemRenderer } from '@blueprintjs/select';
import '@blueprintjs/core/lib/css/blueprint.css';

const useFetch = (url:URL['href']):[string[], (word:string) => void] => {
  const [data, setData] = useState([]);

  async function fetchData(word:string) {
    try {
      const response:Response = await fetch(`${url}?search=${word}`);
      const responseData = await response.json();
      setData(responseData.slice(0,10));
    } catch (e) {
      debugger;
    }
  }

  return [data, fetchData];
};

const renderWord:ItemRenderer<string> = (item, { handleClick, modifiers, query }) => {
  return (
    <MenuItem
      active={modifiers.active}
      disabled={modifiers.disabled}
      onClick={handleClick}
      text={item}
      key={item}
    />
    )
}


const DataDropDown:React.FC = () => {
  const [symbols, setSymbols] = useFetch('/words');


  return (
    <section className="bp3-dark">
      <Suggest
        items={symbols}
        inputValueRenderer={item => item}
        onQueryChange={setSymbols}
        itemRenderer={renderWord}
        openOnKeyDown
        popoverProps={{ minimal:true }}
        noResults="No Results"
      />
    </section>
    )
}

export default DataDropDown;
