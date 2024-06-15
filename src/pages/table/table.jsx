import React, { useState, useEffect } from "react";
import nodesData from './data';
import { Grid, html } from "gridjs";
import "gridjs/dist/theme/mermaid.css";

const Tables = () => {
    const [nodes, setNodes] = useState(nodesData);
    const [search, setSearch] = useState({});
    const [grid, setGrid] = useState(null);

    const handleSubmit = (id) => (e) => {
        e.preventDefault();
        fetchCompany(id);
    };

    const handleInputChange = (id) => (e) => {
        const value = e.target.value;
        setSearch(prevSearch => ({ ...prevSearch, [id]: value }));
        setNodes(prevNodes => prevNodes.map(node => node.id === id ? { ...node, domainname: value } : node));
    };

    useEffect(() => {
        window.handleSubmit = handleSubmit;
        window.handleInputChange = handleInputChange;
    }, [handleSubmit, handleInputChange]);

   

   

    

    const handleChange = ( id) => {
        const updatedNodes = nodes.map(node => {
            if (node.id === id) {
                return { ...node, domainname: e.target.value  };
            }
            return node;
        });
        setNodes(updatedNodes);
    };

   


    const fetchCompany = async ( id) => {
        // e.preventDefault();

        const searchterm = search[id];
        const url = `https://fresh-linkedin-profile-data.p.rapidapi.com/get-company-by-domain?domain=${searchterm}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_API_KEY,
                'x-rapidapi-host': 'fresh-linkedin-profile-data.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);

            if (result.data) {
                const updatedNodes = nodes.map(node => {
                    if (node.id === id) {
                        return { ...node, Enrichiqcompany: result.data.company_name, url:result.data.linkedin_url };
                    }
                    return node;
                });
                setNodes(updatedNodes);
            }

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const columns = [
            {
                width:'1 px',
                name:html('<input type="checkbox" />'),
                formatter: (cell, row) => {
                    const hoverHandler = () => {
                        const checkboxHtml = '<input type="checkbox">';
                        return html(`<p onmouseenter="this.innerHTML='${checkbox()}'" onmouseleave="this.innerHTML=${cell}" style=" text-align: center; ">${cell}</p>`);
                    };

                    const checkbox = () => 
                        {
                            return html(<input type="checkbox"/>);
                        }

                    return hoverHandler();
                }, 
            },
            {
                name: 'T Domain',
                formatter: (cell, row) => {
                    const id = row.cells[0].data;
                    const formId = `form-${id}`;
                    const inputId = `input-${id}`;
                    
                    const handleInputChange = (e) => {
                        setSearch({ ...search, [id]: e.target.value });
                    };

                    return html(`
                        <form id="${formId}" onsubmit="event.preventDefault(); window.handleSubmit('${id}')(event);">
                            <input 
                                type="text" 
                                id="${inputId}" 
                                style="width: 100%; outline:none; padding:4px" 
                                value="${cell}" 
                                onclick="this.style.borderColor = '#038ff7'; this.style.borderWidth = '1px'; this.style.borderStyle = 'solid';"
                                oninput="window.handleInputchange(${id})(event);"
                               
                            >
                        </form>
                    `);
                },
                width: '10%',
            },
            
            {
                name: html('<i class="bi bi-briefcase"">Briefcase</i> '),
                formatter: (cell) => html(`<a href="${cell}" target="_blank">
                    ${cell}</a>`),
                width:'25%',
            },
            {
                name: html('<i class="bi bi-sort-up-alt" style="height:"10px"; width:"10px"; paddingRight:"4px" ""><i class="bi bi-link-45deg"></i>Url</i> '),
                // formatter: (cell) => html(`<a href="${cell}" target="_blank">
                //     ${cell}</a>`),
                width:'25%',
            }
        ];

       
        

        const gridInstance = new Grid({
            columns: columns,
            data: nodes.map(node => [node.id, node.domainname, node.Enrichiqcompany]),
            resizable:true,
            style: {
                td: {
                    padding:'0px',
                  height:'35px',
                  outline:'none'
                },
              },
              width:'100%'
        });

        setGrid(gridInstance);
        

    }, [nodes]);


   

    return (
        <div className="mt-12 mx-8">
            <div ref={node => node && grid && grid.render(node)}>
                
            </div>
        </div>
    );
};

export default Tables;
