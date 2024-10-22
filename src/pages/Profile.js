import React, { useState, useEffect } from 'react';

// Data profil statis
const profiles = [
    {
        login: 'wahyuramadhani7',
        name: 'Wahyu Ramadhani',
        avatar_url: 'https://media.licdn.com/dms/image/v2/D4D03AQHUO3PKJEAM2A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1712938253654?e=1733356800&v=beta&t=gt3Qccn66KSvZiyfTesGrX7SK1KMNb3Bw1VNxRc8LXo', // Ganti dengan URL gambar asli
        html_url: 'https://github.com/warani7',
    },
    {
        login: 'danangwepe',
        name: 'Danang Wahyu',
        avatar_url: 'https://avatars.githubusercontent.com/u/129502848?v=4',
        html_url: 'https://github.com/Danangwepe/',
    },
    {
        login: 'anotherimm',
        name: 'Imam Baihaqy',
        avatar_url: 'https://avatars.githubusercontent.com/u/114788053?v=4',
        html_url: 'https://github.com/anotherimm',
    },
    {
        login: 'JohanTarnama27',
        name: 'Johan Tarnama',
        avatar_url: 'https://avatars.githubusercontent.com/u/135436725?v=4',
        html_url: 'https://github.com/JohanTarnama27',
    },
];

export default function Profile() {
    const [profilesData, setProfilesData] = useState(profiles);

    useEffect(() => {
        // Fungsi untuk mengambil data bio dan followers dari GitHub
        const fetchGitHubData = async () => {
            const updatedProfiles = await Promise.all(
                profiles.map(async (profile) => {
                    const response = await fetch(`https://api.github.com/users/${profile.login}`);
                    const data = await response.json();
                    return {
                        ...profile,
                        bio: data.bio || 'No bio available',
                        followers: data.followers || 0,
                    };
                })
            );
            setProfilesData(updatedProfiles);
        };

        fetchGitHubData();
    }, []);

    return (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", backgroundColor: "#282c34", padding: "20px" }}>
            {profilesData.map((profile, index) => (
                <a
                    key={index}
                    href={profile.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "15px", backgroundColor: "#3b3f46", borderRadius: "10px", width: "200px", cursor: "pointer" }}>
                        <img
                            src={profile.avatar_url || 'https://via.placeholder.com/100'}
                            alt={`${profile.login} avatar`}
                            style={{ borderRadius: "50%", width: "100px", height: "100px", marginBottom: "10px" }}
                        />
                        <h3 style={{ color: "white", marginBottom: "5px", fontSize: "18px" }}>
                            {profile.name || profile.login || 'No name available'}
                        </h3>
                        <p style={{ color: "white", fontSize: "14px", textAlign: "center" }}>
                            {profile.bio}
                        </p>
                        <p style={{ color: "white", fontSize: "14px", textAlign: "center", marginTop: "5px" }}>
                            Followers: {profile.followers}
                        </p>
                    </div>
                </a>
            ))}
        </div>
    );
}
