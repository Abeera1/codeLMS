import React from 'react';
import Navbar from './shared/Navbar'



export default class CodeEditor extends React.Component 
{   

    render()
    {
		
		console.log('CoursePage props')
		console.log("back againnnn");
	    return(
	    	<div>
	    	 	<Navbar/>
		     	<form>
			      <fieldset>
			        <legend align='left'>Assignment 1</legend>
			        <div class="modal-body row">
			        	<div class='col-lg-2 col-md-4 col-sm-6'>
				          	<h3 align="left">Instructions</h3>
				          	<input type = "text"
				                id = "myText"
				                defaultValue = "Write a function for Sum" />
			        	</div>         
			        	<div class='col-lg-4 col-md-6 col-sm-8'>
				          	<h3>Code Editor</h3>
				          	<textarea id = "myTextArea"
				                rows = "15"
				                cols = "50"
				                defaultValue="Write code here">
				            </textarea>				          		
				           	<div class="row eq">        
				                <input type='button' defaultValue='Run' onClick={()=>{console.log('Run Clicked')}}></input>
				                <input type='button' defaultValue='Submit' onClick={()=>{console.log('Submit Clicked')}}></input> 
				           	</div>
				        </div>  
			        	<div class='col-lg-6 col-md-8 col-sm-10'>
				          	<h3>Chat Box</h3>
				          	<textarea id = "myTextArea"
				                rows = "10"
				                cols = "20"
				                defaultValue="Type your comment...">
				            </textarea>
				          	<div class='row eq'>
				           		<input type='button' defaultValue='Post' onClick={()=>{console.log('Post Clicked')}}></input>
				          	</div>
				        </div>       				                
			        </div>
			      </fieldset>
			    </form>
		    </div>
	    );
	}
}

