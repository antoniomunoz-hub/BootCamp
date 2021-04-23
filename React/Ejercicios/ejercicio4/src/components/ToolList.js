import React from 'react'

export default function ToolList({tools}) {
    return (
        <div>
            <div className="row">
           {contacts.map((tool, index) =>{
                return (
                    <ul>
                        <li class="list-group-item active">{tool.id}</li>
                        <li class="list-group-item">{tool.tittle}</li>
                        <li class="list-group-item">{tool.completed}</li>
                    </ul>
                );
            })}
        </div>
        </div>
    )
}
