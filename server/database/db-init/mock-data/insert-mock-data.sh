# To run this script succesfully 
# 0- Init database using server/database/db-init/schema.sql
# 1- cd into server/database/db-init/mock-data
# 2- run chmod +x insert-mock-data.sh
# 3- ./insert-mock-data.sh

echo "Adding CATEGORIES mock data .."
mysql -u root -proot < categories.sql
echo "DONE ! Proceeding .."

echo "Adding SERVICES mock data .."
mysql -u root -proot < services.sql
echo "DONE ! Proceeding .."

# echo "Adding SERVICES mock data .."
# mysql -u root -proot < services.sql
# echo "DONE ! Proceeding .."