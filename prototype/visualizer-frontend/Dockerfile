## Base Python Image for App
FROM node:15.5.1-alpine3.10

# Setting up Docker environment 
# Setting Work directory for RUN CMD commands
WORKDIR /code

#Copy requirements file from current directory to file in 
#containers code directory we have just created.
# add `/app/node_modules/.bin` to $PATH
ENV PATH /code/node_modules/.bin:$PATH

# install app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install
# add app
COPY . .
RUN yarn build

# start app
CMD ["yarn", "start"]