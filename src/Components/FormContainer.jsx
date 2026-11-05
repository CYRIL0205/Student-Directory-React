const FormContainer = () =>{
    return(
        <>
        <section id="formcontainer">
            <form id="studentForm">
                <div class="input-fields">
                <label for="name">Student Name</label><label/>
                <input type="text" name="name" id="name"></input> 
                </div>
                <div class="input-fields">
                    <label for="program">Program</label>
                    <input type="text" name="program" id="program"></input>
                </div>
                <div>
                    <button type="submit">Add student</button>
                </div>


            </form>


        </section>

        
        </>
    )

}






export default FormContainer;