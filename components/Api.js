import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Api = () => {
    const [data, setData] = useState();

    const getData = async () => {
        const url = 'https://dummyjson.com/recipes/1';
        let result = await fetch(url);
        result = await result.json();
        setData(result);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <View>
            {
                data ?
                    data.map((item) => {
                        return (
                            <View>
                                <Text>{item.id}</Text>
                            </View>
                        )
                    })
                    :
                    null
            }
        </View>
    )
}

export default Api

const styles = StyleSheet.create({})




// import React, { useEffect, useState } from 'react';
// import { View, Text, ActivityIndicator, FlatList } from 'react-native';

// const FetchExample = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch API on component mount
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       {loading ? (
//         <ActivityIndicator size="large" color="#0000ff" />
//       ) : (
//         <FlatList
//           data={data}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <Text>{`${item.name} - ${item.email}`}</Text>
//           )}
//         />
//       )}
//     </View>
//   );
// };

// export default FetchExample;
