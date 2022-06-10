import type { NextPage } from "next";
import {
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Home: NextPage = () => {
  return (
    <>
      <h1>회원 소개</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Backend Developer
              </Typography>
              <Typography variant="h5" component="div">
                문상원{" "}
                <IconButton
                  color="primary"
                  aria-label="github profile"
                  size="large"
                  onClick={() =>
                    window.open("https://github.com/MoonSangWon", "_blank")
                  }
                >
                  <GitHubIcon />
                </IconButton>
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Frontend Developer
              </Typography>
              <Typography variant="h5" component="div">
                박영건{" "}
                <IconButton
                  color="primary"
                  aria-label="github profile"
                  size="large"
                  onClick={() =>
                    window.open("https://github.com/jadru", "_blank")
                  }
                >
                  <GitHubIcon />
                </IconButton>
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Backend Developer
              </Typography>
              <Typography variant="h5" component="div">
                박성훈{" "}
                <IconButton
                  color="primary"
                  aria-label="github profile"
                  size="large"
                  onClick={() =>
                    window.open("https://github.com/Hoon9901", "_blank")
                  }
                >
                  <GitHubIcon />
                </IconButton>
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Frontend Developer
              </Typography>
              <Typography variant="h5" component="div">
                최진서{" "}
                <IconButton
                  color="primary"
                  aria-label="github profile"
                  size="large"
                  onClick={() =>
                    window.open("https://github.com/Dark-jin", "_blank")
                  }
                >
                  <GitHubIcon />
                </IconButton>
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Frontend Developer
              </Typography>
              <Typography variant="h5" component="div">
                신종웅{" "}
                <IconButton
                  color="primary"
                  aria-label="github profile"
                  size="large"
                  onClick={() =>
                    window.open("https://github.com/ShinJongUng", "_blank")
                  }
                >
                  <GitHubIcon />
                </IconButton>
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Backend Developer
              </Typography>
              <Typography variant="h5" component="div">
                성병석{" "}
                <IconButton
                  color="primary"
                  aria-label="github profile"
                  size="large"
                  onClick={() =>
                    window.open("https://github.com/sbs1621", "_blank")
                  }
                >
                  <GitHubIcon />
                </IconButton>
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Frontend Developer
              </Typography>
              <Typography variant="h5" component="div">
                최원석{" "}
                <IconButton
                  color="primary"
                  aria-label="github profile"
                  size="large"
                  onClick={() =>
                    window.open("https://github.com/devmiru", "_blank")
                  }
                >
                  <GitHubIcon />
                </IconButton>
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Backend Developer
              </Typography>
              <Typography variant="h5" component="div">
                문준호{" "}
                <IconButton
                  color="primary"
                  aria-label="github profile"
                  size="large"
                  onClick={() =>
                    window.open("https://github.com/mjh000526", "_blank")
                  }
                >
                  <GitHubIcon />
                </IconButton>
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Frontend Developer
              </Typography>
              <Typography variant="h5" component="div">
                김예린{" "}
                <IconButton
                  color="primary"
                  aria-label="github profile"
                  size="large"
                  onClick={() =>
                    window.open("https://github.com/yealinliz0516", "_blank")
                  }
                >
                  <GitHubIcon />
                </IconButton>
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Backend Developer
              </Typography>
              <Typography variant="h5" component="div">
                임채성{" "}
                <IconButton
                  color="primary"
                  aria-label="github profile"
                  size="large"
                  onClick={() =>
                    window.open("https://github.com/puleugo", "_blank")
                  }
                >
                  <GitHubIcon />
                </IconButton>
              </Typography>
              <Typography variant="body2"></Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
