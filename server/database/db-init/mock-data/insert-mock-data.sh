# To run this script succesfully 
# 0- Init database using server/database/db-init/schema.sql
# 1- cd into server/database/db-init/mock-data
# 2- run chmod +x insert-mock-data.sh
# 3- ./insert-mock-data.sh

echo "Creating bricolyDB .."
mysql -u root -proot < ../schema.sql
echo "######### DONE ! Proceeding .."

echo "Adding CATEGORIES mock data .."
mysql -u root -proot < categories.sql
echo "######### DONE ! Proceeding .."

echo "Adding SERVICES mock data .."
mysql -u root -proot < services.sql
echo "######### DONE ! Proceeding .."

echo "Adding USERS mock data .."
mysql -u root -proot < users.sql
echo "######### DONE ! Proceeding .."

echo "Adding PROFESSIONALS mock data .."
mysql -u root -proot < professionals.sql
echo "######### DONE ! Proceeding .."

echo "Adding CREDENTIALS mock data .."
mysql -u root -proot < credentials.sql
echo "######### DONE ! Proceeding .."

echo "Adding JOBS mock data .."
mysql -u root -proot < jobs.sql
echo "######### DONE ! Proceeding .."

echo "Adding JOB APPLICATIONS mock data .."
mysql -u root -proot < job-app.sql
echo "######### DONE ! Proceeding .."

echo "Adding REVIEWS mock data .."
mysql -u root -proot < reviews.sql
echo "######### DONE ! Proceeding .."