
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Search } from 'lucide-react';

// Sample blog data
const blogData = [
  {
    id: 1,
    title: "How to Prepare for JEE Main & Advanced: A Complete Guide",
    excerpt: "Expert tips on how to strategize your preparation for JEE examinations to maximize your chances of success.",
    category: "Engineering",
    date: "May 14, 2025",
    imageUrl: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZHl8ZW58MHx8MHx8fDA%3D",
    author: "Dr. Rajesh Kumar"
  },
  {
    id: 2,
    title: "NEET 2025: Important Topics & Preparation Strategy",
    excerpt: "Discover the most critical topics to focus on for NEET 2025 and create an effective preparation strategy.",
    category: "Medical",
    date: "May 10, 2025",
    imageUrl: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNhbHxlbnwwfHwwfHx8MA%3D%3D",
    author: "Dr. Priya Sharma"
  },
  {
    id: 3,
    title: "Understanding the New Education Policy and Its Impact",
    excerpt: "An analysis of how the New Education Policy is changing the landscape of higher education in India.",
    category: "Education",
    date: "May 5, 2025",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWR1Y2F0aW9ufGVufDB8fDB8fHww",
    author: "Prof. Amit Verma"
  },
  {
    id: 4,
    title: "Top Engineering Colleges in Maharashtra: Rankings & Admission Process",
    excerpt: "A comprehensive guide to the top engineering institutions in Maharashtra with details on cut-offs and admission processes.",
    category: "Engineering",
    date: "April 28, 2025",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",
    author: "Sunil Patil"
  },
  {
    id: 5,
    title: "Career Options After 12th: Beyond Engineering and Medicine",
    excerpt: "Explore alternative career paths for students looking beyond traditional engineering and medical fields.",
    category: "Career",
    date: "April 20, 2025",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyZWVyfGVufDB8fDB8fHww",
    author: "Meera Desai"
  },
  {
    id: 6,
    title: "Understanding Cutoffs: How Colleges Decide Admission Criteria",
    excerpt: "A deep dive into how colleges establish cutoff marks and what factors influence them each year.",
    category: "Admission",
    date: "April 15, 2025",
    imageUrl: "https://images.unsplash.com/photo-1517486808906-6ca8b3f8e1f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D",
    author: "Dr. Vijay Singh"
  },
];

// Categories for filtering
const categories = [
  "All",
  "Engineering",
  "Medical",
  "Education",
  "Career",
  "Admission"
];

const BlogCard = ({ blog }: { blog: any }) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md">
      <AspectRatio ratio={16 / 9}>
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="object-cover w-full h-full"
        />
      </AspectRatio>
      <CardContent className="p-5 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-mantrana-purple/10 text-mantrana-purple rounded-full">
            {blog.category}
          </span>
          <span className="text-xs text-gray-500">{blog.date}</span>
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{blog.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">{blog.excerpt}</p>
      </CardContent>
      <CardFooter className="px-5 py-3 border-t text-sm text-gray-500">
        By {blog.author}
      </CardFooter>
    </Card>
  );
};

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter blogs based on search and category
  const filteredBlogs = blogData.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        blog.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto py-12 px-5">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Career Mantrana Blog</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest insights on education, career guidance, and admission processes
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="relative w-full md:w-auto">
          <Input
            placeholder="Search blogs..."
            className="pl-10 w-full md:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-mantrana-purple text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
        
        {filteredBlogs.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-500">
            No blogs found matching your search criteria
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
