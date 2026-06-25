from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, EmailStr

router = APIRouter()


class UserRegister(BaseModel):
    name: str
    email: EmailStr
    password: str


class UserLogin(BaseModel):
    email: EmailStr
    password: str


@router.post("/register", status_code=status.HTTP_201_CREATED)
def register(user: UserRegister):
    return {
        "message": "User registered successfully",
        "user": {
            "name": user.name,
            "email": user.email,
        },
    }


@router.post("/login")
def login(user: UserLogin):
    if user.email == "" or user.password == "":
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid credentials")
    return {
        "message": "Login successful",
        "access_token": "demo-token",
        "token_type": "bearer",
    }
