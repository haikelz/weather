import { Image, Flex, Box, Text, Input, useColorMode} from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/button'; 
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './index.css';

const App = () =>{ 
  const [ query, setQuery ] = useState('');
  const [ weather, setWeather ] = useState({});
  const search = async (e) => {
    if(e.key === 'Enter') {
        const data = await fetchWeather(query); 
        setWeather(data);
        setQuery('');
    }
  }

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

return (
  <Box>

  {weather.main &&  (
    <Flex className='weather' mt='5vh' justifyContent='center'>
      <div>
        <Text fontWeight='bold'>
          <span>{weather.name}</span>
          <sup>{weather.sys.country}</sup>
          <span> {Math.round(weather.main.temp)}</span>
          <sup>&deg;C</sup>
        </Text>

        <div>
          <Image className='city-icon' src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />   
          <p>{weather.weather[0].description}</p>
        </div>
      </div>
    </Flex> 
  )}

  <Flex mt='10vh' justifyContent='center' alignItems='center'> 
    <Flex pr={5}> 
      <IconButton aria-label='icon-dark' icon={isDark ? <FaSun /> : <FaMoon />} isRound={true} onClick={toggleColorMode}></IconButton>
    </Flex> 
        <Input
          w={64}
          type='text'
          className='search'
          placeholder='Search a City'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />      
    </Flex>   
  </Box> 

  )
}

export default App; 
