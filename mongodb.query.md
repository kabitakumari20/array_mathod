# diifrant between $addToSet and $push ?

 $addToSet do not add the item to the given field if it already contains it,
on the other hand $push will add the given object to field whether it exists or not.

db.items.updateOne(
{ _id: 'my-id', 'items': { '$ne': 'items1' },
    {
    '$push': {
            'items': 'item1',
             }
            }
})

db.items.updateOne(
    { _id: 'my-id' },
    {
        '$addToSet': {
            'items': 'item1',
        }
    }
)


# aggregation lookup and pipeline query

# ex db.cafe.aggregate([
  {
    $lookup: {
      from: "stamp",
      as: "stamps",
      let: {
        id: "$_id",
        name: "$name" //All cafes variables,
      },
      pipeline: [
        {
          $project: {
            cafeId: 1,
            stampDate: 1,
            stampId: 1,
            cafeId: 1,
            status: 1,
            userId: { $toObjectId: "$userId" }
          }
        },
        {
          $match: {
            $expr: {
              $and: [
                {
                  $eq: [{ $toObjectId: "$$id" }, { $toObjectId: "$cafeId" }]
                },
                {
                  $eq: [
                    { $toObjectId: "$userId" },
                    mongoose.Types.ObjectId(req.user._id)
                  ]
                }
              ]
            }
          }
        }
      ]
    }
  }
]);

# ex db.cafe.aggregate([
      {
        $lookup: {
          from: "stamp",
          as: "stamps",
          let: {
            id: "$_id",
            name: "$name"
          },
          pipeline: [
            { $project: { id:1, cafeId: { $toObjectId: "$$id"}, name:1 } },
            { $match: { expr: { $eq: ["$$cafeId", "$cafeId"] } } },
            { $sort: { stampDate: -1 } },
            { $limit: 10 }
          ]
        }
      }
    ]);
