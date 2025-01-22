import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPOw_DHxHtQXK0bnzncq7m1h6qCHwovE8",
  authDomain: "truewhirl.firebaseapp.com",
  projectId: "truewhirl",
  storageBucket: "truewhirl.appspot.com",
  messagingSenderId: "45449842201",
  appId: "1:45449842201:web:f1bc62195c5fcebde7a488",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Helper function to format date as "22 January 2025 at 16:21:36 UTC+7"
const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
  };
  return date.toLocaleString('en-US', options);
};

// CRUD Operations for Categories

/**
 * Create a new category
 * @param category - Object containing category details (e.g., name, description, icon, color)
 */
export const createCategory = async (category: {
  name: string;
  description?: string;
  icon?: string;
  color?: string;
}) => {
  try {
    const currentDate = new Date();
    const docRef = await addDoc(collection(db, "categories"), {
      ...category,
      createdAt: formatDate(currentDate),
      updatedAt: formatDate(currentDate),
    });
    console.log("Category added with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding category: ", error);
    throw error;
  }
};

/**
 * Get all categories
 * @returns Array of categories
 */
export const getAllCategories = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "categories"));
    const categories: Array<{ id: string; [key: string]: any }> = [];
    querySnapshot.forEach((doc) => {
      categories.push({ id: doc.id, ...doc.data() });
    });
    return categories;
  } catch (error) {
    console.error("Error fetching categories: ", error);
    throw error;
  }
};

/**
 * Update a category
 * @param id - Document ID of the category to update
 * @param updatedData - Object containing the updated fields
 */
export const updateCategory = async (id: string, updatedData: { [key: string]: any }) => {
  try {
    const categoryRef = doc(db, "categories", id);
    await updateDoc(categoryRef, {
      ...updatedData,
      updatedAt: formatDate(new Date()),
    });
    console.log("Category updated with ID: ", id);
  } catch (error) {
    console.error("Error updating category: ", error);
    throw error;
  }
};

/**
 * Delete a category
 * @param id - Document ID of the category to delete
 */
export const deleteCategory = async (id: string) => {
  try {
    const categoryRef = doc(db, "categories", id);
    await deleteDoc(categoryRef);
    console.log("Category deleted with ID: ", id);
  } catch (error) {
    console.error("Error deleting category: ", error);
    throw error;
  }
};

export { db };