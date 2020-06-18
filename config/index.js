const { NODE_ENV } = process.env;

const config = {
  production: {
    MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@israserver-shard-00-00-1bczh.mongodb.net:27017,israserver-shard-00-01-1bczh.mongodb.net:27017,israserver-shard-00-02-1bczh.mongodb.net:27017/test?ssl=true&replicaSet=IsraServer-shard-0&authSource=admin&retryWrites=true&w=majority`,
  },
  staging: {
    MONGO_URI: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@israserver-shard-00-00-1bczh.mongodb.net:27017,israserver-shard-00-01-1bczh.mongodb.net:27017,israserver-shard-00-02-1bczh.mongodb.net:27017/staging?ssl=true&replicaSet=IsraServer-shard-0&authSource=admin&retryWrites=true&w=majority`,
  },
};

module.exports = config[NODE_ENV];
