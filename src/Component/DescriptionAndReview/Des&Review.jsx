import React, { useState } from "react";
import { Card, Button, Form, ListGroup } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const StarRating = ({ rating, onRate }) => {
    return (
        <div className="d-flex">
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    style={{
                        cursor: "pointer",
                        color: index < rating ? "gold" : "gray",
                        fontSize: "24px",
                    }}
                    onClick={() => onRate(index + 1)}
                >
                    <FaStar />
                </span>
            ))}
        </div>
    );
};

const DesReview = () => {
    const [showMore, setShowMore] = useState(false);
    const [reviews, setReviews] = useState([
        { name: "Alice", rating: 5, comment: "Excellent product!" },
        { name: "Bob", rating: 4, comment: "Really liked it, but could be better." },
    ]);
    const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

    const toggleShowMore = () => setShowMore(!showMore);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview({ ...newReview, [name]: value });
    };

    const handleRatingChange = (rating) => {
        setNewReview({ ...newReview, rating });
    };

    const addReview = (e) => {
        e.preventDefault();
        if (newReview.name && newReview.rating && newReview.comment) {
            setReviews([...reviews, newReview]);
            setNewReview({ name: "", rating: 0, comment: "" });
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Description Section */}
                <div className="col-md-6 mb-4">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title className="text-primary">Product Description</Card.Title>
                            <Card.Text>
                                {showMore ? (
                                    <>
                                        <p>
                                            This product is designed with precision and care, offering unparalleled
                                            quality and performance. Its state-of-the-art features include advanced
                                            technology integration, durable materials, and a sleek design that makes it
                                            perfect for everyday use.
                                        </p>
                                        <p>
                                            Whether you are looking for functionality, reliability, or aesthetics, this
                                            product delivers on all fronts. With its eco-friendly build, it is not only
                                            efficient but also contributes to sustainable living.
                                        </p>
                                        <p>
                                            Enjoy its multi-purpose functionality, ease of use, and adaptability to a
                                            variety of needs. Backed by exceptional customer service and a warranty
                                            period, it's a purchase you can make with confidence.
                                        </p>
                                    </>
                                ) : (
                                    "This product combines cutting-edge technology with practical usability, offering reliability and style in one package."
                                )}
                            </Card.Text>
                            <Button
                                variant="primary"
                                onClick={toggleShowMore}
                                className="btn-gradient rounded-3"
                                style={{
                                    background: "linear-gradient(90deg, #007bff, #00d4ff)",
                                    border: "none",
                                }}
                            >
                                {showMore ? "Show Less" : "Read More"}
                            </Button>
                        </Card.Body>
                    </Card>
                </div>

                {/* Review Section */}
                <div className="col-md-6">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title className="text-primary">Customer Reviews</Card.Title>
                            <ListGroup className="mb-3">
                                {reviews.map((review, index) => (
                                    <ListGroup.Item
                                        key={index}
                                        style={{
                                            borderLeft: "4px solid gold",
                                            marginBottom: "8px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        <strong>{review.name}</strong> -
                                        <span className="ms-2" style={{ color: "gold" }}>
                                            {"★".repeat(review.rating)}
                                        </span>
                                        <p>{review.comment}</p>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </div>
            </div>

            {/* Form Section */}
            <div className="row mt-4">
                <div className="col-md-12">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title className="text-primary">Submit Your Review</Card.Title>
                            <Form onSubmit={addReview}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Your Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={newReview.name}
                                        onChange={handleInputChange}
                                        placeholder="Enter your name"
                                        required
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Rating</Form.Label>
                                    <StarRating rating={newReview.rating} onRate={handleRatingChange} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Comment</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="comment"
                                        value={newReview.comment}
                                        onChange={handleInputChange}
                                        placeholder="Write your comment"
                                        rows={3}
                                        required
                                    />
                                </Form.Group>
                                <Button
                                    variant="success"
                                    type="submit"
                                    className="btn-gradient"
                                    style={{
                                        background: "linear-gradient(90deg, #28a745, #80e98e)",
                                        border: "none",
                                    }}
                                >
                                    Submit Review
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default DesReview