import React from 'react'
import Input from '../FormReuses/Input';
import Button from '@mui/material/Button';
import {Headline, FormWrapper, RowCol1,RowCol2,RowCol3,RowCol4, Column1,Column2,Column3, Column4, Icon, Item, Text, Message} from './ContactElements';
import {FormReuse, Form} from '../FormReuses/FormReuse';
import { FaPhone } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMailchimp } from "react-icons/fa";


const initialFieldValues = {
    id : 0,
    fullName:'',
    email:'',
    mobileNo:'',
    message:'',
}

export default function Contact() {
    <h1>Test</h1>

    // const validation = ()=> {
    //     let temp = {}
    //     if (!values.fullName.trim()) {
    //         temp.fullName="Name required."
    //     }
    //     else if (!/^[A-Z a-z]+$/.test(values.fullName)) {
    //         temp.fullName="Alphabetical letters only."
    //     }

    //     // temp.fullName = values.fullName?"":"This field is required."
    //     if (!values.email) {
    //         temp.email="Email Required."
    //     }else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,4}$/.test(values.email)) {
    //         temp.email="Invalid Email address."
    //     }
    //     //temp.email = (/$|.+@.+..+/).test(values.email)?"":"Email is not valid."
    //     if (!values.mobileNo) {
    //         temp.mobileNo="Mobile number required."
    //     }else if (!/^[0-9]{10,}$/.test(values.mobileNo)) {
    //         temp.mobileNo="Invalid mobile Number."
    //     }
    //     // else if (values.mobileNo.length<9 && /^[0-9]$/i.test(values.mobileNo)) {
    //     //     temp.mobileNo="Invalid mobile Number."
    //     // }
    //     //temp.mobileNo = values.mobileNo.length>9?"":"Mobile number is not valid."
    //     // temp.message = values.message?"":"This field is required."
    //     if (!values.message) {
    //         temp.message="Field required."
    //     }


    //     if (!values.eventName) {
    //         temp.eventName="Name required."
    //     }
    //     else if (!/^[A-Za-z]+$/.test(values.eventName)) {
    //         temp.eventName="Alphabetical letters only."
    //     }
    //     setErrors({
    //         ...temp
    //     })

    //     return Object.values(temp).every(x => x ==="")
    // }

    

    

    // const{
    //     values,
    //     setValues,
    //     handleInputChange,
    //     errors,
    //     setErrors,
    //     reset
    // }=FormReuse(initialFieldValues);

    

    // const handleSubmit = e => {
    //     e.preventDefault()
    //     if (validation())
    //         window.alert('testing...')
    // }

    // return (
    //     <div>
            
    //     {/* <Main> */}
    //         <Form onSubmit={handleSubmit}>
    //             <FormWrapper> 
    //                 <Headline>Event Registration Form</Headline> 
    //                 <RowCol1>
    //                     <Column1>
    //                         <Input
    //                             label="Event Name"
    //                             name="eventName"
    //                             value={values.eventName}
    //                             onChange={handleInputChange}
    //                             error={errors.eventName}

    //                         />
    //                     </Column1>
    //                 </RowCol1>
    //                 <RowCol2>
    //                     <Column1>
    //                         <Input
    //                             label="Event Organizer"
    //                             name="eventOrganizer"
    //                             value={values.eventOrganizer}
    //                             onChange={handleInputChange}
    //                             error={errors.eventOrganizer}

    //                         />
    //                     </Column1>
    //                     <Column2>
    //                         <Input
    //                             label="Event Type"
    //                             name="eventType"
    //                             value={values.eventType}
    //                             onChange={handleInputChange}
    //                             error={errors.eventType}
    //                         />
    //                     </Column2>
    //                 </RowCol2>  
    //                 <RowCol4>
    //                     <Column1>
    //                         <Input
    //                             label="Date"
    //                             name="date"
    //                             value={values.date}
    //                             onChange={handleInputChange}
    //                             error={errors.date}

    //                         />
    //                     </Column1>
    //                     <Column2>
    //                         <Input
    //                             label="Start Time"
    //                             name="startTime"
    //                             value={values.startTime}
    //                             onChange={handleInputChange}
    //                             error={errors.startTime}

    //                         />
    //                     </Column2>
    //                     <Column3>
    //                         <Input
    //                             label="End Time"
    //                             name="endTime"
    //                             value={values.endTime}
    //                             onChange={handleInputChange}
    //                             error={errors.endTime}

    //                         />
    //                     </Column3>
    //                     <Column4>
    //                         <Input
    //                             label="$Cost/Ticket"
    //                             name="costPerTicket"
    //                             value={values.costPerTicket}
    //                             onChange={handleInputChange}
    //                             error={errors.costPerTicket}
    //                         />
    //                     </Column4>
    //                 </RowCol4>
    //                 <RowCol3>
    //                     <Column1>
    //                         <Input
    //                             label="Venue"
    //                             name="Venue"
    //                             value={values.Venue}
    //                             onChange={handleInputChange}
    //                             error={errors.Venue}

    //                         />
    //                     </Column1>
    //                     <Column2>
    //                         <Input
    //                             label="Online Event"
    //                             name="onlineEvent"
    //                             value={values.onlineEvent}
    //                             onChange={handleInputChange}
    //                             error={errors.onlineEvent}

    //                         />
    //                     </Column2>
    //                     <Column3>
    //                         <Input
    //                             label="TBA"
    //                             name="tba"
    //                             value={values.tba}
    //                             onChange={handleInputChange}
    //                             error={errors.tba}

    //                         />
    //                     </Column3>
    //                 </RowCol3>
    //                 <RowCol1>
    //                     <Column1>
    //                         <Input
    //                             label="Auto Address"
    //                             name="autoAdd"
    //                             value={values.autoAdd}
    //                             onChange={handleInputChange}
    //                             error={errors.autoAdd}
    //                         />
    //                     </Column1>
    //                 </RowCol1>
    //                 <RowCol2>
    //                     <Column1>
    //                     <Input
    //                             label="Buy Ticket"
    //                             name="buyTicket"
    //                             value={values.buyTicket}
    //                             onChange={handleInputChange}
    //                             error={errors.buyTicket}
    //                         />
    //                     </Column1>
    //                     <Column2>
    //                         <Input
    //                             label="Refund"
    //                             name="refund"
    //                             value={values.refund}
    //                             onChange={handleInputChange}
    //                             error={errors.refund}

    //                         />
    //                     </Column2>
    //                 </RowCol2>
    //                 <RowCol1>
    //                     <Column1>
    //                         <Input
    //                             label="Description"
    //                             multiline="true"
    //                             name="description"
    //                             rows={5}
    //                             value={values.description}
    //                             onChange={handleInputChange}
    //                             error={errors.description}
    //                         />
    //                     </Column1>    
    //                 </RowCol1>


    // {/* ================================================================================================= */}
    //                 <Headline>Contact Us</Headline>
    //                   <RowCol2>
    //                     <Column1>
    //                         <Input
    //                             label="Full Name"
    //                             name="fullName"
    //                             value={values.fullName}
    //                             onChange={handleInputChange}
    //                             error={errors.fullName}

    //                         />
    //                         <Input
    //                             label="Email"
    //                             name="email"
    //                             value={values.email}
    //                             onChange={handleInputChange}
    //                             error={errors.email}

    //                         />
    //                         <Input
    //                             label="Mobile"
    //                             name="mobileNo"
    //                             value={values.mobileNo}
    //                             onChange={handleInputChange}
    //                             error={errors.mobileNo}

    //                         />
    //                         <Input
    //                             label="Message"
    //                             multiline="true"
    //                             name="message"
    //                             rows={5}
    //                             value={values.message}
    //                             onChange={handleInputChange}
    //                             error={errors.message}
    //                         />
    //                         <Button
    //                             variant="contained"
    //                             size="large"
    //                             color="secondary"
    //                             type="submit"
    //                         >
    //                             Submit
    //                         </Button>
    //                         <Button
    //                             variant="contained"
    //                             size="large"
    //                             color="default"
    //                             type="reset"
    //                             onClick={reset}
    //                         >
    //                             Reset
    //                         </Button>
    //                     </Column1>
                        
                        
    //                     <Column2>
                            
    //                             <Item>
    //                                 <Icon><FaLocationArrow fontSize="large" /></Icon>
    //                                 <Text>Kathmandu, Nepal</Text>
    //                             </Item>
    //                             <Item>
    //                                 <Icon><FaPhone fontSize="large" /></Icon>
    //                                 <Text>+977-9876543210</Text>
    //                             </Item>
    //                             <Item>
    //                                 <Icon><FaMailchimp fontSize="large" /></Icon>
    //                                 <Text>Mailme@gmail.com</Text>
    //                             </Item>
    //                             {/* <Item>
    //                                 <Icon><LocationOnIcon fontSize="large"/></Icon>
    //                                 <Text>asdasdasd</Text>
    //                             </Item> */}
    //                             <Message>
    //                                 I hope you found something that piqued your interest here.
    //                                 We would be very happy yo answer any questions. Do check back for
    //                                 future updates.
    //                             </Message>
                            
    //                     </Column2>
    //                     </RowCol2>   
    //             </FormWrapper>
                
    //         </Form>
    //         {/* </Main> */}
    //     </div>
    // )
}
