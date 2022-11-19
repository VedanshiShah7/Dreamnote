import { Input } from '@chakra-ui/react';
import React, { useState } from 'react';

function Synthesis() {
  let [value, setValue] = useState('');

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };

  const params = {
    method: 'POST',
    //key: 'c227dd46f1329bdf28e5610f3fd9cc5a',
    lang: 'English',
    txt: 'Cellular respiration is a series of chemical reactions that break down glucose to produce ATP, which may be used as energy to power many reactions throughout the body. There are three main steps of cellular respiration: glycolysis, the citric acid cycle, and oxidative phosphorylation.',
    tt: 'a',
    st: 'y',
  };
  const options = {
    method: 'POST',
    body: JSON.stringify(params),
  };

  fetch(
    'https://api.meaningcloud.com/topics-2.0?key=c227dd46f1329bdf28e5610f3fd9cc5a&lang=en&txt=Cellular respiration is a series of chemical reactions that break down glucose to produce ATP, which may be used as energy to power many reactions throughout the body. There are three main steps of cellular respiration: glycolysis, the citric acid cycle, and oxidative phosphorylation.&tt=a&st=y',
    options,
  )
    .then(response => response.json())
    .then(response => {
      console.log(response);
    });

  // fetch('https://api.meaningcloud.com/topics-2.0')
  //.then((response) => response.json())
  //.then((data) => console.log(data));

  return (
    <div>
      <Input value={value} onChange={handleInputChange} />
    </div>
  );
}

export default Synthesis;
