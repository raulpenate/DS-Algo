#!/bin/bash

# Define text colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to display a loading animation
loading_animation() {
    spin='-\|/'
    i=0
    while kill -0 "$1" 2>/dev/null; do
        printf "\r${YELLOW}Please wait... ${spin:i%4:1}"
        i=$(( (i+1) % 4 ))
        sleep 0.1
    done
    printf "\r${NC}"
}

# Step 1: Create virtual environment
echo -e "${GREEN}Creating virtual environment...${NC}"
python3 -m venv venv
if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to create virtual environment.${NC}"
    exit 1
fi
echo -e "${GREEN}Virtual environment created successfully!${NC}"

# Step 2: Activate virtual environment
echo -e "${GREEN}Activating virtual environment...${NC}"
source venv/bin/activate
if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to activate virtual environment.${NC}"
    exit 1
fi
echo -e "${GREEN}Virtual environment activated!${NC}"

# Step 3: Install dependencies
echo -e "${GREEN}Installing dependencies from requirements.txt...${NC}"
pip install -r requirements.txt &
loading_animation $!
if [ $? -ne 0 ]; then
    echo -e "${RED}Failed to install dependencies.${NC}"
    exit 1
fi
echo -e "${GREEN}Dependencies installed successfully!${NC}"

# Step 4: Start the project with mkdocs
echo -e "${BLUE}Starting the project with 'mkdocs serve'...${NC}"
mkdocs serve