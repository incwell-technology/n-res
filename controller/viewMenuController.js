const Food = require('../models/food')
const Category = require('../models/category')

exports.get_menu = async(req,res,next) => {
    try{
        categories = []
        let category = await Category.find({})
        for(let i = 0;i<category.length; i++){
            let food = await Food.findOne({category:category[i]._id})
            if (food){
                await categories.push(category[i])
            }
        }
        console.log(categories)
        let response = []
        for(let i = 0;i<categories.length; i++ ){
            let food = await Food.find({category:categories[i]._id})
            if(food){
                await response.push({category:categories[i], food: food})
            }
        }
        res.status(200).json({
            success:true,
            payload:response
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            payload:{},
            error: {
                code : 500,
                message:"Internal server error"
            }
        })
    }
}

exports.get_food_by_category = async(req,res,next) =>{
    try{
        categories = []
        let category = await Category.find({})
        for(let i = 0;i<category.length; i++){
            let food = await Food.findOne({category:category[i]._id})
            if (food){
                await categories.push(category[i])
            }
        }
        console.log(categories)
        let response = []
        let food = await Food.find({category:categories[0]._id})
        if(food){
            await response.push({category:categories[0], food: food})
        }
        res.status(200).json({
            success:true,
            payload:response
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            payload:{},
            error: {
                code : 500,
                message:"Internal server error"
            }
        })
    }
}
