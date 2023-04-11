import grapesjs from 'grapesjs'
import React, { useState, useEffect } from 'react'
import gjsPresetWebpage from "grapesjs-preset-webpage"
import grapesjsplugintoolbox from 'grapesjs-plugin-toolbox'
import grapesjspluginbeeupimage from 'grapesjs-plugin-beeup-image'



// import "../styles/main.scss"


export default function Editor() {

    const [editor, setEditor] = useState(null)

    useEffect(() => {
        const editor = grapesjs.init({
            container: "#editor",
            plugins: [
                gjsPresetWebpage, 
                grapesjsplugintoolbox,
                grapesjspluginbeeupimage
            ],
            pluginsOpts:{
                gjsPresetWebpage: {},
                [grapesjspluginbeeupimage]: {}
            }
        })
        setEditor(editor)  
    }, [])
    

  return (
    <div>
        <div id='editor'></div>
    </div>
  )
}