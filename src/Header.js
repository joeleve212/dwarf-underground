import React from 'react'
import ToolbarButtons from './ToolbarButtons'
const Header = () =>{
    return(
        <div className="expanded row header">
          <ToolbarButtons />
          <div className="headline text-center small-12 columns">
            <h1>The Dwarf Underground</h1>
            <h3>Delving deep for the <span className="gold">shiniest</span> news</h3>
          </div>
        </div>
    );
}
export default Header