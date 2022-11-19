import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';

function Synthesis() {

  let [value, setValue] = useState('');

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const headers = {
    "accept": "application/json",
    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlpLVEEzaDh4U1Y4MDBJTG5UMWlXaSJ9.eyJodHRwczovL21hbnRpdW1haS5jb20vaWRwX29yZ19pZCI6WyJvcmdfTUhJQzZtalBrTUQyMGROdSIsIm9yZ19nUm5ZbDBOY2lEWDVNbjZsIiwib3JnX2Vsc3pSQmZPYmpmU09DaTAiLCJvcmdfTEdiWjVVTEtzdEttUEN6RCIsIm9yZ18yTTgzQ3hPVjNmYlBjUVVnIl0sIm5pY2tuYW1lIjoiYXJpbG96bmVyIiwibmFtZSI6ImFyaWxvem5lckBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9zLmdyYXZhdGFyLmNvbS9hdmF0YXIvNDI4YmE2ODcwYzUxZTEyM2VmZGQ0MTExYzI4MGI2NjU_cz00ODAmcj1wZyZkPWh0dHBzJTNBJTJGJTJGY2RuLmF1dGgwLmNvbSUyRmF2YXRhcnMlMkZhci5wbmciLCJ1cGRhdGVkX2F0IjoiMjAyMi0xMS0xOVQxODo1NDowOC4zMDBaIiwiZW1haWwiOiJhcmlsb3puZXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJpc3MiOiJodHRwczovL3Byb2QtbWFudGl1bS51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjM3OTFjYmE2MmE5NTE1OTAxMzU0OGVmIiwiYXVkIjoiUFZaRHVoN0FkWnV1Y01tdnVQN1RLOGY1bVE2bGNuODgiLCJpYXQiOjE2Njg4ODQwNDksImV4cCI6MTY2ODkyMDA0OX0.YXiNVOM9uv9XMJ2axGIO1NqGuLHvwiEh5GdvWcLfVhtT-8GYtzqjq6zO8cImrFwS_-Vcao8IqEF_P1-bBJRsXrpxzdErnjQqwSbGx6BB0zc_lMDOsOVuozTZ-Y13y8XNJYnINrhTDesbIec1QqBX7Jz6B5HvlGpTkvOXumGRSB_i-eovsIfJ2BU6MzPnnEnMNEiZPvMSgfx0RbrEfP4x5aGAfnMg40yMokrrygqHCV259Ahtnp184WauLVf80nun4CjwPxGM8o-2hQljAXLZxslQ14tjNRApbjRLHh8fwFPSbfJjOHuTOQ3qHnoF7qyd7SFDrNOCKCo8fnstL5ftLg"
};
  const options = {
    method: 'POST',
    headers,
  };

  
  fetch("https://api.mantiumai.com/v1/prompt/5e81f081-1fc8-47dc-9de2-2d5dfec4a82b/try?input=The%20term%20%E2%80%9Cdomestic%20dog%E2%80%9D%20refers%20to%20any%20of%20several%20hundred%20breeds%20of%20dog%20in%20the%20world%20today.%20While%20these%20animals%20vary%20drastically%20in%20appearance%2C%20every%20dog%E2%80%94from%20the%20Chihuahua%20to%20the%20Great%20Dane%E2%80%94is%20a%20member%20of%20the%20same%20species%2C%20Canis%20familiaris.%20This%20separates%20domestic%20dogs%20from%20wild%20canines%2C%20such%20as%20coyotes%2C%20foxes%2C%20and%20wolves.%20%20Domestic%20dogs%20are%20mostly%20kept%20as%20pets%2C%20though%20many%20breeds%20are%20capable%20of%20surviving%20on%20their%20own%2C%20whether%20it%E2%80%99s%20in%20a%20forest%20or%20on%20city%20streets.%20A%20third%20of%20all%20households%20worldwide%20have%20a%20dog%2C%20according%20to%20a%202016%20consumer%20insights%20study.%20This%20makes%20the%20domestic%20dog%20the%20most%20popular%20pet%20on%20the%20planet."
  ,options,
  ).
  then(response => response.json()).then(response => {
    console.log(response['answer'])
  });


  return (
    <div>
      <Input value={value} onChange={handleInputChange} />
    </div>
  );
}

export default Synthesis;
