import Layout from "../components/Layout";
import Grid from "@material-ui/core/Grid";

const IndexPage = () => (
  <Layout title="Thomas Amiri Product Designer Portfolio">
    <div style={{ height: "80px" }}></div>

    <Grid container xs={12}>
      <Grid item xs={12} md={6}>
        <h1>Hey, let's build. 🚀</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
          lacus nec erat consectetur aliquam. Vivamus eget ultrices arcu, nec
          fringilla dui. Nullam suscipit, tortor vel ullamcorper eleifend.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
          lacus nec erat consectetur aliquam. Vivamus eget ultrices arcu, nec
          fringilla dui. Nullam suscipit, tortor vel ullamcorper eleifend.
        </p>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src="https://whatever12-team-bucket.storage.fleek.co/photo-1447703693928-9cd89c8d3ac5.jpeg"
          alt=""
        />
      </Grid>
    </Grid>
    <div style={{ height: "250px" }}></div>
    <Grid container xs={12} spacing={4}>
      <Grid item xs={12} md={6}>
        <div
          style={{
            backgroundColor: "lightblue",
            height: "350px",
            textAlign: "center",
          }}
        >
          <h1>Project 1</h1>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div
          style={{
            backgroundColor: "lightblue",
            height: "350px",
            textAlign: "center",
          }}
        >
          <h1>Project 2</h1>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div
          style={{
            backgroundColor: "lightblue",
            height: "350px",
            textAlign: "center",
          }}
        >
          <h1>Project 3</h1>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div
          style={{
            backgroundColor: "lightblue",
            height: "350px",
            textAlign: "center",
          }}
        >
          <h1>Project 4</h1>
        </div>
      </Grid>
    </Grid>
    <div style={{ height: "50px" }}></div>

    <Grid
      container
      xs={12}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <button>
          <h1>Let's Talk</h1>
        </button>
      </Grid>
    </Grid>
  </Layout>
);

export default IndexPage;
