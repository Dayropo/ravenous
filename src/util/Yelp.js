const apiKey = 'PL6ApdZcyJQ6EXENdJje3g2ACez7y26blZeEYoG82WUwMf-BQBlrKITHT4Lisk3z_nh_E58A50ttNtl1i3xNppmgfyepBgF8Y0AZ7PDChMwlTSHR4yHwDLUbciS0XnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        console.log(jsonResponse.businesses);
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count
          };
        });
      };
    });
  }
};

export default Yelp;
