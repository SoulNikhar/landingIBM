import React, { useState } from 'react';
import '../css/DonateFood.css'

const DonateFood = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    foodTypes: [],
    quantity: '',
    pickUpOrDropOff: '',
    preferredDateTime: '',
    isRecurring: false,
    frequency: '',
    privacyPolicyAgreed: false,
    consentToShare: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFoodChange = (e) => {
    const { selectedOptions } = e.target;
    const selectedFoodTypes = Array.from(selectedOptions).map(option => option.value);
    setFormData({
      ...formData,
      foodTypes: selectedFoodTypes,
    });
  };

  const handleAddFood = () => {
    const foodType = document.getElementById('food_type').value;
    if (foodType && !formData.foodTypes.includes(foodType)) {
      setFormData({
        ...formData,
        foodTypes: [...formData.foodTypes, foodType],
      });
    }
  };

  const handleRemoveFood = (foodType) => {
    setFormData({
      ...formData,
      foodTypes: formData.foodTypes.filter(type => type !== foodType),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here (e.g., send to API or handle locally)
    console.log('Form submitted:', formData);
  };

  return (
    <form className='donate-food' onSubmit={handleSubmit}>
      <h1 className='food-head'>Donate Food</h1>
      <div className="personal-data">
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        
        <div>
          <label htmlFor="address">Address:</label>
          <input type='text' id='address' value={formData.address} onChange={handleInputChange}></input>
        </div>
      </div>

      <div className='food-dropdown'>
        <label htmlFor="food_type">Type of Food:</label>
        <span>[Hold Ctrl Button and click to select multiple food items.]</span>
        <select
          id="food_type"
          multiple
          onChange={handleFoodChange}
        >
          <option value="" disabled>Select Food Type</option>
          <optgroup label="Non-Perishable Items">
            <option value="Canned_vegetables">Canned Vegetables</option>
            <option value="Canned_fruits">Canned Fruits</option>
            <option value="Canned_beans">Canned Beans</option>
            <option value="Canned_soups_stews">Canned Soups and Stews</option>
            <option value="Canned_meats">Canned Meats (Tuna, Chicken, etc.)</option>
            <option value="Canned_fish">Canned Fish</option>
            <option value="Peanut_butter">Peanut Butter</option>
            <option value="Jelly_jam">Jelly and Jam</option>
            <option value="Pasta">Pasta</option>
            <option value="Rice">Rice</option>
            <option value="dry_beans">Dry Beans</option>
            <option value="lentils">Lentils</option>
            <option value="boxed_meals">Boxed Meals (Macaroni and Cheese, Instant Noodles)</option>
            <option value="breakfast_cereals">Breakfast Cereals</option>
            <option value="oatmeal">Oatmeal</option>
            <option value="flour">Flour</option>
            <option value="sugar">Sugar</option>
            <option value="baking_mixes">Baking Mixes (Pancake Mix, Muffin Mix)</option>
            <option value="cooking_oils">Cooking Oils</option>
          </optgroup>
          <optgroup label="Packaged Snacks">
            <option value="granola_bars">Granola Bars</option>
            <option value="protein_bars">Protein Bars</option>
            <option value="crackers">Crackers</option>
            <option value="popcorn">Popcorn</option>
            <option value="nuts_seeds">Nuts and Seeds</option>
            <option value="dried_fruits">Dried Fruits</option>
            <option value="trail_mix">Trail Mix</option>
            <option value="cookies">Cookies</option>
          </optgroup>
          <optgroup label="Beverages">
            <option value="bottled_water">Bottled Water</option>
            <option value="juice_boxes">Juice Boxes</option>
            <option value="shelf_stable_milk">Shelf-Stable Milk (Powdered Milk, Evaporated Milk)</option>
            <option value="coffee">Coffee</option>
            <option value="tea">Tea</option>
            <option value="sports_drinks">Sports Drinks</option>
          </optgroup>
          <optgroup label="Condiments and Sauces">
            <option value="tomato_sauce">Tomato Sauce</option>
            <option value="pasta_sauce">Pasta Sauce</option>
            <option value="soy_sauce">Soy Sauce</option>
            <option value="salad_dressings">Salad Dressings</option>
            <option value="ketchup">Ketchup</option>
            <option value="mustard">Mustard</option>
            <option value="mayonnaise">Mayonnaise</option>
            <option value="hot_sauce">Hot Sauce</option>
          </optgroup>
          <optgroup label="Baking Supplies">
            <option value="baking_soda">Baking Soda</option>
            <option value="baking_powder">Baking Powder</option>
            <option value="yeast">Yeast</option>
            <option value="spices_herbs">Spices and Herbs</option>
            <option value="salt">Salt</option>
            <option value="pepper">Pepper</option>
          </optgroup>
          <optgroup label="Baby Food">
            <option value="baby_formula">Baby Formula</option>
            <option value="baby_cereals">Baby Cereals</option>
            <option value="baby_snacks">Baby Snacks</option>
            <option value="jars_baby_food">Jars of Baby Food</option>
          </optgroup>
        </select>
        <button type="button" onClick={handleAddFood}>Add Food Type</button>
      </div>

      <div className='food-summary'>
        <label>Selected Food Types:</label>
        <ul>
          {formData.foodTypes.map((foodType) => (
            <li key={foodType}>
              {foodType}
              <button type="button" onClick={() => handleRemoveFood(foodType)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      <div className="radio-group">
        <label>Pick-Up or Drop-Off:</label>
        <label>
          <input
            type="radio"
            name="pickUpOrDropOff"
            value="Pick-Up"
            checked={formData.pickUpOrDropOff === 'Pick-Up'}
            onChange={handleInputChange}
          />
          Pick-Up
        </label>
        <label>
          <input
            type="radio"
            name="pickUpOrDropOff"
            value="Drop-Off"
            checked={formData.pickUpOrDropOff === 'Drop-Off'}
            onChange={handleInputChange}
          />
          Drop-Off
        </label>
      </div>

      {formData.pickUpOrDropOff === 'Pick-Up' && (
        <div className='pickup-date'>
          <label htmlFor="preferredDateTime">Preferred Pick-Up Date and Time:</label>
          <input
            type="datetime-local"
            id="preferredDateTime"
            name="preferredDateTime"
            value={formData.preferredDateTime}
            onChange={handleInputChange}
          />
        </div>
      )}

      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="isRecurring"
            checked={formData.isRecurring}
            onChange={handleInputChange}
          />
          Would you like to make this a recurring donation?
        </label>
        {formData.isRecurring && (
          <div>
            <label>Frequency:</label>
            <label>
              <input
                type="radio"
                name="frequency"
                value="Monthly"
                checked={formData.frequency === 'Monthly'}
                onChange={handleInputChange}
              />
              Monthly
            </label>
            <label>
              <input
                type="radio"
                name="frequency"
                value="Quarterly"
                checked={formData.frequency === 'Quarterly'}
                onChange={handleInputChange}
              />
              Quarterly
            </label>
            <label>
              <input
                type="radio"
                name="frequency"
                value="Annually"
                checked={formData.frequency === 'Annually'}
                onChange={handleInputChange}
              />
              Annually
            </label>
          </div>
        )}
      </div>

      <div className="checkbox-group">
        <label>
          <input
            type="checkbox"
            name="privacyPolicyAgreed"
            checked={formData.privacyPolicyAgreed}
            onChange={handleInputChange}
          />
          I agree to the Privacy Policy.
        </label>
        <label>
          <input
            type="checkbox"
            name="consentToShare"
            checked={formData.consentToShare}
            onChange={handleInputChange}
          />
          I consent to share my information for recognition purposes.
        </label>
      </div>

      <button type="submit" id='submit'>Submit</button>

      <div className="footer">
        <p>Thank you for your generosity!</p>
      </div>
    </form>
  );
};

export default DonateFood;
